import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { models } from 'mongoose';
import { model } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  savedPlans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkoutPlan'
  }]
}, {
  methods: {
    async comparePassword(candidatePassword: string): Promise<boolean> {
      return await bcrypt.compare(candidatePassword, this.password);
    }
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = models.User || model('User', userSchema);

export default User;