from django.contrib import admin
from .models import Product

# Custom admin to show all fields including gender
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'product_name', 'amount', 'gender')
    list_filter = ('gender',)
    search_fields = ('product_name',)
