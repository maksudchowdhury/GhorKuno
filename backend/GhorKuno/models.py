from django.db import models
from accounts.models import UserProfileInfo


# Create your models here.
class ContactUs(models.Model):
    user_id = models.IntegerField(default=0, null=False)
    name = models.CharField(max_length=100, default="", blank=False)
    subject = models.CharField(max_length=100, default="", blank=False)
    desc = models.CharField(max_length=1000, blank=False)
    createdTime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['user_id']


class User(models.Model):
    firstName = models.CharField(max_length=100, default="No name", null=False)
    lastName = models.CharField(max_length=100, default="No name", null=False)
    password = models.CharField(max_length=100, default="", null=False)
    phNo = models.IntegerField(max_length=11, default=0, null=True)
    emailAddr = models.CharField(max_length=100, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['emailAddr']

    def __str__(self):
        return self.emailAddr or ''

class Shop(models.Model):
    userID = models.IntegerField(default=0, null=False)
    shopName = models.CharField(max_length=100, default="No name", null=False)
    review = models.FloatField(max_length=10, default=0, null=True)
    isBanned = models.BooleanField(null=False)
    detailedAddr = models.CharField(max_length=300, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['shopName']

    def __str__(self):
        return self.shopName or ''

class Item(models.Model):
    shopID = models.IntegerField(default=0, null=False)
    itemName = models.CharField(max_length=100, default="No name", null=False)
    cost = models.FloatField(max_length=10, default=0, null=False)
    accumulatedRating = models.FloatField(max_length=10, default=0, null=False)
    itemImg = models.CharField(max_length=100, default="No name", null=False)
    itemDetail = models.CharField(max_length=300, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['itemName']

    def __str__(self):
        return self.itemName or ''