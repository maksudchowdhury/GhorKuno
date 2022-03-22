from django.urls import path, include

    
from email.policy import default
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter



from accounts.views import UserViewSet

from .views import ContactUsViewSet, ItemViewSet, ShopViewSet,ItemReviewViewSet,DeliveryBoyViewSet,CartViewSet,OrderViewSet,OrderHistoryViewSet


router = DefaultRouter()
router.register('contact', ContactUsViewSet, basename='contact-us')
router.register('user', UserViewSet, basename='user')
router.register('shop', ShopViewSet, basename='shop')
router.register('item', ItemViewSet, basename='item')
router.register('review', ItemReviewViewSet, basename='item-review')
router.register('deliveryboy', DeliveryBoyViewSet, basename='deliveryboy')
router.register('cart', CartViewSet, basename='cart')
router.register('order', OrderViewSet, basename='order')
router.register('orderhistory', OrderHistoryViewSet, basename='orderhistory')



urlpatterns = [
    path('gk/', include(router.urls)),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)