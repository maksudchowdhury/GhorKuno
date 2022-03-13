from rest_framework import serializers
from rest_framework.authtoken.views import Token
from accounts.serializers import UserProfileInfoSerializer
from accounts.models import UserProfileInfo
from .models import ContactUs, Shops


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

    # def to_representation(self, instance):
    #     self.fields['user_id'] = UserProfileInfo(read_only=True)
    #     return super(ContactUsSerializer, self).to_representation(instance)
    #     user = serializers.PrimaryKeyRelatedField(queryset=UserProfileInfo.objects.all(), many=False)


class ShopSerializer(serializers.ModelSerializer):
    user_id = UserProfileInfoSerializer(many=False)

    class Meta:
        model = Shops
        fields = '__all__'
