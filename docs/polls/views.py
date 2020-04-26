from django.shortcuts import render
from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist

from .models import Question

# from urls.py, the index function is run when a client calls the root path ('') of this app 
def index(request):
    return HttpResponse('Hello world! Welcome to the Polls app!')

def detail(request, question_id):
    try:
        question = Question.objects.get(id=question_id)
        return HttpResponse('ID: {question_id} Question: {question_name}'.format(question_id=question_id, question_name=question.question_text))

    except ObjectDoesNotExist:
        # no question has this ID
        return HttpResponse('This question doesn\'t seem to exist or no longer exists.')

def results(request, question_id):
    try:
        question = Question.objects.get(id=question_id)
        return HttpResponse('This is the result of {question_name}'.format( question_name=question.question_text))

    except ObjectDoesNotExist:
        # no question has this ID
        return HttpResponse('This question doesn\'t seem to exist or no longer exists.')

def vote(request, question_id):
    try:
        question = Question.objects.get(id=question_id)
        return HttpResponse('This is the voting page of {question_name}'.format( question_name=question.question_text))

    except ObjectDoesNotExist:
        # no question has this ID
        return HttpResponse('This question doesn\'t seem to exist or no longer exists.')