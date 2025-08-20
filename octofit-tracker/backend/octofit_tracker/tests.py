from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username='testuser', email='test@example.com')
        self.assertEqual(user.email, 'test@example.com')

    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(team.name, 'Test Team')

    def test_activity_creation(self):
        activity = Activity.objects.create(user='testuser', type='run', duration=10)
        self.assertEqual(activity.type, 'run')

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(team='Test Team', points=100)
        self.assertEqual(leaderboard.points, 100)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', difficulty='Medium')
        self.assertEqual(workout.difficulty, 'Medium')
