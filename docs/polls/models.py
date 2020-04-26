import datetime

from django.db import models
from django.utils import timezone

# Models are defined here
class Question(models.Model): # models inherits django.db.models.Model
    # these member names will be used as columns for your database and for your code
    question_text = models.TextField(max_length=200)
    pub_date = models.DateTimeField('date published') # 'date published' is the verbose name for readability

    def is_new(self) -> bool:
        """
        Returns true if the question is asked within a day ago.
        """
        return timezone.now() > self.pub_date - datetime.timedelta(days=1)

    # when printing it in the interactive shell, having this function makes it more easily identifiable
    def __str__(self):
        return 'Question: "{question_text}" at {pub_date}'.format(question_text=self.question_text, pub_date=self.pub_date)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) # ForeignKey is integral to a relational database.
    choice_text = models.CharField(max_length=200) # setting constraints are useful for database schema and for validation of user input
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text