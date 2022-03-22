from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.views import Token
from rest_framework import serializers
from rest_framework.authtoken.views import Token
from accounts.serializers import UserProfileInfoSerializer
from accounts.models import UserProfileInfo
from .models import ContactUs

from .models import User,Shop,Item,ItemReview,DeliveryBoy,Cart,Order,OrderHistory

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class ItemReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemReview
        fields = '__all__'


class DeliveryBoySerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryBoy
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderHistory
        fields = '__all__'


