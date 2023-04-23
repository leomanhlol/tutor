"""tutor URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from user import views 


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/lesson/$',views.lesson_list),
    re_path(r'^api/user/$',views.user_list),
    re_path(r'^api/subject/$',views.subject_list),
    re_path(r'^api/session/$',views.session_list),
    re_path(r'^api/booking/$',views.booking_list),
    re_path(r'^api/news/$',views.news_list),


]
