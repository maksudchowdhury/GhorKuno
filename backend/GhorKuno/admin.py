from django.contrib import admin
from .models import ContactUs, User, Shop, Item


# Register your models here.
@admin.register(ContactUs)
class ShopOfferModel(admin.ModelAdmin):
    list_filter = ('subject', 'desc', 'name')
    list_display = ('user_id', 'name', 'subject', 'createdTime')



@admin.register(User)
class UserModel(admin.ModelAdmin):
    list_filter = ('id','emailAddr', 'firstName')
    list_display = ('id', 'firstName', 'lastName', 'password', 'phNo', 'emailAddr')

@admin.register(Shop)
class ShopModel(admin.ModelAdmin):
    list_filter = ('id','shopName', 'detailedAddr')
    list_display = ('id', 'userID','shopName', 'review', 'isBanned', 'detailedAddr')

@admin.register(Item)
class ItemModel(admin.ModelAdmin):
    list_filter = ('id','itemName', 'itemDetail')
    list_display = ('id','shopID', 'itemName', 'cost', 'accumulatedRating', 'itemImg', 'itemDetail')