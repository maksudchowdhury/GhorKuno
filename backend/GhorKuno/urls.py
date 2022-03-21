from email.policy import default
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter



from accounts.views import UserViewSet

from .views import ContactUsViewSet, ItemViewSet, ShopViewSet,defaultView


router = DefaultRouter()
router.register('contact', ContactUsViewSet, basename='contact-us')
router.register('shop', ShopViewSet, basename='shop')





router.register('user', UserViewSet, basename='user')

router.register('item', ItemViewSet, basename='item')




urlpatterns = [
    path('gk/', include(router.urls)),
    path('', defaultView,name='defaultView'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
