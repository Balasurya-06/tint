from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from django.views.decorators.http import require_GET, require_http_methods
from django.views.decorators.csrf import csrf_exempt

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
