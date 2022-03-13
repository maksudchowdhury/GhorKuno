from django.urls import path, include
from .views import UserViewSet, ShopViewSet, ItemViewSet  \
    

from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register('user', UserViewSet, basename='user')
router.register('shop', ShopViewSet, basename='shop')
router.register('item', ItemViewSet, basename='item')