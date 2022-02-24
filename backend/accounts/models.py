
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone


class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, house_name, road_no, block_no, area, city, district, mobilePhone, is_worker, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, house_name=house_name, road_no=road_no, block_no=block_no, area=area, city=city, district=district, mobilePhone=mobilePhone, is_worker=is_worker, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, first_name, last_name, house_name, road_no, block_no, area, city, district, mobilePhone, is_worker, password):
        user = self.create_user(email, first_name, last_name, house_name, road_no, block_no, area, city, district, mobilePhone, is_worker, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    house_name = models.CharField(max_length=255, default="")
    road_no = models.CharField(max_length=255, default="")
    block_no = models.CharField(max_length=255, default="")
    area = models.CharField(max_length=255, default="")
    city = models.CharField(max_length=255, default="")
    district = models.CharField(max_length=255, default="")
    mobilePhone = models.CharField(max_length=20, default="")
    # date_of_birth = models.DateField(default=timezone.now)
    # profile_picture = models.ImageField(default="")

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_worker = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'house_name', 'road_no', 'block_no', 'area', 'city', 'district', 'mobilePhone', 'is_worker', ]

    class Meta:
        ordering = ['id']

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email


# class UserProfile(models.Model):
#     user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
#     phone_no = models.CharField(max_length=100, default="")
#     city = models.CharField(max_length=100, default="")
#     bio = models.TextField(max_length=500, default="")
#     skills = models.CharField(max_length=255, default="")
#     avatar = models.ImageField(
#         default="", blank=True, null=True, upload_to='avatars')
#
#     def __str__(self):
#         return self.user.email