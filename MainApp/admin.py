from django.contrib import admin
from .models import User, Shop, Item

@admin.register(User)
class UserModel(admin.ModelAdmin):
    list_filter = ('id','emailAddr', 'firstName')
    list_display = ('id', 'firstName', 'lastName', 'password', 'phNo', 'emailAddr')

@admin.register(Shop)
class ShopModel(admin.ModelAdmin):
    list_filter = ('id','shopName', 'detailedAddr')
    list_display = ('id', 'user','shopName', 'review', 'isBanned', 'detailedAddr')

@admin.register(Item)
class ItemModel(admin.ModelAdmin):
    list_filter = ('id','itemName', 'itemDetail')
    list_display = ('id','shop', 'itemName', 'cost', 'accumulatedRating', 'itemImg', 'itemDetail')