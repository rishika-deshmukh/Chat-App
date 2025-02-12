import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  color: {
    type: Number,
    required: false,
  },
  profileSetup: {
    type: Boolean,
    default: false,
  },
});
userSchema.pre('save', async function(next) {
    // If password has been modified (or if it's a new document), hash it
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10); // Generate salt with 10 rounds
      this.password = await bcrypt.hash(this.password, salt); // Hash the password
    }
    next(); // Continue with saving the document
  });
  
  const User = mongoose.model('Users', userSchema);
  
  export default User;