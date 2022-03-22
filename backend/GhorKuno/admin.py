from django.contrib import admin
from .models import ContactUs,User, Shop, Item, ItemReview, DeliveryBoy, Cart, Order, OrderHistory

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

@admin.register(ItemReview)
class ItemReviewModel(admin.ModelAdmin):
    list_filter = ('id','userID', 'itemID')
    list_display = ('id', 'userID', 'itemID', 'rating', 'comment')  

@admin.register(DeliveryBoy)
class DeliveryBoyModel(admin.ModelAdmin):
    list_filter = ('id','firstName', 'lastName')
    list_display = ('id', 'firstName', 'lastName', 'password', 'phNo', 'qualifications','location','status')

@admin.register(Cart)
class CartModel(admin.ModelAdmin):
    list_filter = ('id','userID', 'itemID')
    list_display = ('id','userID', 'itemID', 'quantity')

@admin.register(Order)
class OrderModel(admin.ModelAdmin):
    list_filter = ('id','userID', 'cartID')
    list_display = ('id', 'userID', 'cartID', 'deliveryboyID', 'deliveryCost','totalCost','remark','dropLocation','orderTime','deliveryStatus')

@admin.register(OrderHistory)
class OrderHistoryModel(admin.ModelAdmin):
    list_filter = ('id','userID', 'orderID')
    list_display = ('id', 'userID', 'orderID')
