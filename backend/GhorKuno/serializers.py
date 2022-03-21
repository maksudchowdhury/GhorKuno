from rest_framework import serializers
from rest_framework.authtoken.views import Token
from accounts.serializers import UserProfileInfoSerializer
from accounts.models import UserProfileInfo
from .models import ContactUs

from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.views import Token


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'


from .models import User,Shop,Item

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