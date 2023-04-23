from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, null=True)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000, blank=True)
    is_tutor = models.BooleanField(default=False)
    #image field
    image= models.ImageField(upload_to="images", null=True)
 


    def __str__(self):
        return self.username
    
class News(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    description = models.TextField(null=True)
    content = models.TextField()
    image = models.ImageField(upload_to="images", null=True)
    user_id= models.ForeignKey(User, on_delete=models.CASCADE)




class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Session(models.Model):
    id = models.IntegerField(primary_key=True)
    day_sun = models.CharField(max_length=100)
    session = models.IntegerField()

    def __str__(self):
        return self.day_sun+" " +str(self.session)


class Lesson(models.Model):
    id= models.AutoField(primary_key=True)
    subject_id = models.ForeignKey(Subject, on_delete=models.CASCADE)
    tutor_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    session_id = models.ForeignKey(Session,on_delete=models.CASCADE)
    date = models.DateField()

class Booking(models.Model):
    id = models.AutoField(primary_key=True)
    lesson_id = models.ForeignKey(Lesson,on_delete=models.CASCADE)
    student_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.BooleanField(default=False)

