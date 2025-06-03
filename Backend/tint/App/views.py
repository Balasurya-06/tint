from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from django.views.decorators.http import require_GET, require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer

# Create your views here.

@require_GET
def product_list(request):
    products = Product.objects.all()
    data = [
        {
            "product_id": p.product_id,
            "product_name": p.product_name,
            "image": p.image.url if p.image else "",
            "amount": str(p.amount),
            "gender": p.get_gender_display(),
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)

@csrf_exempt
@require_http_methods(["DELETE"])
def product_delete(request, product_id):
    try:
        product = Product.objects.get(product_id=product_id)
        product.delete()
        return JsonResponse({'success': True, 'message': 'Product deleted'})
    except Product.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Product not found'}, status=404)

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    # Process each product to include available_sizes as a list
    data = []
    for product in products:
        product_data = ProductSerializer(product).data
        # Add the available sizes as a list instead of a comma-separated string
        product_data['available_sizes'] = product.get_available_sizes()
        data.append(product_data)
    return Response(data)

@api_view(['GET'])
def get_product_detail(request, pk):
    try:
        product = Product.objects.get(product_id=pk)
        product_data = ProductSerializer(product).data
        # Add the available sizes as a list
        product_data['available_sizes'] = product.get_available_sizes()
        return Response(product_data)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)
