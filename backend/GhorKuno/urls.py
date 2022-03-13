from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter

from .views import ContactUsViewSet, ShopViewSet


router = DefaultRouter()
router.register('contact', ContactUsViewSet, basename='contact-us')
router.register('shop', ShopViewSet, basename='shop')

urlpatterns = [
    path('gk/', include(router.urls)),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
