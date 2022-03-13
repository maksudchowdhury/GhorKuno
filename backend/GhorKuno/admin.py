from django.contrib import admin
from .models import ContactUs, Shops


# Register your models here.
@admin.register(ContactUs)
class ShopOfferModel(admin.ModelAdmin):
    list_filter = ('subject', 'desc', 'name')
    list_display = ('user_id', 'name', 'subject', 'createdTime')


@admin.register(Shops)
class ShopModel(admin.ModelAdmin):
    list_filter = ('user_id', 'shopName', 'detailedAddr')
    list_display = ('id', 'user_id', 'shopName', 'review', 'isBanned', 'detailedAddr')
