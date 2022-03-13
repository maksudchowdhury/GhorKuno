from django.db import models
from accounts.models import UserProfileInfo


# Create your models here.
class ContactUs(models.Model):
    user_id = models.IntegerField(default=-1)
    name = models.CharField(max_length=100, default="", blank=False)
    subject = models.CharField(max_length=100, default="", blank=False)
    desc = models.CharField(max_length=1000, blank=False)
    createdTime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['user_id']


class Shops(models.Model):
    user_id = models.OneToOneField(UserProfileInfo, on_delete=models.CASCADE, related_name="shop_owner")
    shopName = models.CharField(max_length=100, default="", blank=False)
    review = models.FloatField(max_length=5, default=0, blank=True)
    isBanned = models.BooleanField(null=False, default=False)
    detailedAddr = models.CharField(max_length=300, default="", blank=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['shopName']

    def __str__(self):
        return self.shopName or ''
