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


class ShopInfo(models.Model):
    userID = models.IntegerField(default=-1, null=False)
    shopName = models.CharField(max_length=100, default="", null=False)
    review = models.FloatField(max_length=10, default=0, null=True)
    isBanned = models.BooleanField(default=False, null=False)
    detailedAddr = models.CharField(max_length=300, default="", null=False)
    offerBDT = models.IntegerField(default=-1, null=True, blank=True)
    offerTill = models.DateField(null=True, blank=True)
    offerPercentage = models.IntegerField(default=-1, null=True, blank=True)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['shopName']

    def __str__(self):
        return self.shopName or ''


class Item(models.Model):
    shopID = models.IntegerField(default=-1, null=False)
    itemName = models.CharField(max_length=100, default="No name", null=False)
    cost = models.FloatField(max_length=10, default=0, null=False)
    accumulatedRating = models.FloatField(max_length=10, default=0, null=False)
    itemImg = models.FileField(blank=True, default="")
    itemDetail = models.CharField(max_length=300, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['itemName']

    def __str__(self):
        return self.itemName or ''


class ItemReview(models.Model):
    userID = models.IntegerField(default=-1, null=False)
    itemID = models.IntegerField(default=-1, null=False)
    rating = models.IntegerField(default=0, null=False)
    comment = models.CharField(max_length=300, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['timeStampUpdated']

    def __str__(self):
        return self.comment or ''


class DeliveryBoy(models.Model):
    firstName = models.CharField(max_length=100, default="No name", null=False)
    lastName = models.CharField(max_length=100, default="No name", null=False)
    password = models.CharField(max_length=100, default="", null=False)
    phNo = models.IntegerField(default=-1, null=True)
    qualifications = models.CharField(max_length=100, default="", null=False)
    location = models.CharField(max_length=300, default="", null=False)
    status = models.CharField(max_length=100, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['firstName']

    def __str__(self):
        return self.firstname or ''


class Cart(models.Model):
    userID = models.IntegerField(default=-1, null=False)
    itemID = models.IntegerField(default=-1, null=False)
    quantity = models.IntegerField(default=0, null=True)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.userID or ''


class Order(models.Model):
    userID = models.IntegerField(default=-1, null=False)
    cartID = models.IntegerField(default=-1, null=False)
    deliveryboyID = models.IntegerField(default=-1, null=False)
    deliveryCost = models.FloatField(max_length=10, default=0, null=False)
    totalCost = models.FloatField(max_length=10, default=0, null=False)
    remark = models.CharField(max_length=300, default="", null=False)
    dropLocation = models.CharField(max_length=300, default="", null=False)
    orderTime = models.CharField(max_length=100, default="", null=False)
    deliveryStatus = models.CharField(max_length=100, default="", null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['orderTime']

    def __str__(self):
        return self.userID or ''


class OrderHistory(models.Model):
    userID = models.IntegerField(default=-1, null=False)
    orderID = models.IntegerField(default=-1, null=False)

    timeStampUpdated = models.DateTimeField(auto_now=True)
    timeStampCreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['orderID']

    def __str__(self):
        return self.orderID or ''