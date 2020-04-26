from django.contrib import admin

from .models import Question, Choice

# models are registered into the admin dashboard here for modification
admin.site.register(Question)
admin.site.register(Choice)