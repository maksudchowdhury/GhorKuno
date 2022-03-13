from django.shortcuts import render
from rest_framework import viewsets

from .models import ContactUs, Shops
from .serializers import ContactUsSerializer, ShopSerializer


# Create your views here.
class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer


class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shops.objects.all()
    serializer_class = ShopSerializer
