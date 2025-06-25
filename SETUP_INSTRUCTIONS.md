# Supabase Authentication Setup Instructions

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `og-ninja-kicks`
   - **Database Password**: Generate a strong password (save this!)
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for the project to be ready (2-3 minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xyzabc123.supabase.co`)
   - **Anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Step 3: Set Up Environment Variables

1. Create a `.env` file in your project root:
```bash
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace the placeholder values with your actual Supabase credentials

## Step 4: Run Database Migration

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click "Run" to execute the migration
5. You should see "Success. No rows returned" message

## Step 5: Configure Authentication Settings

1. In Supabase dashboard, go to **Authentication** → **Settings**
2. Under **Site URL**, add your domain:
   - For development: `http://localhost:5173`
   - For production: `https://yourdomain.com`
3. Under **Redirect URLs**, add:
   - `http://localhost:5173/reset-password` (development)
   - `https://yourdomain.com/reset-password` (production)

## Step 6: Enable Email Authentication

1. In **Authentication** → **Providers**
2. Make sure **Email** is enabled
3. Configure email templates if desired (optional)

## Step 7: Test the Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Try creating a new account
4. Check your email for verification link
5. Try logging in with your new account

## Step 8: Deploy to Production

1. Add your production environment variables to Netlify:
   - Go to your Netlify site dashboard
   - **Site settings** → **Environment variables**
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

2. Update Supabase settings with your production URL

## Features You Now Have

✅ **Secure user registration** with email verification
✅ **Password authentication** with hashing
✅ **Password reset** functionality
✅ **User profiles** with ninja ranks and XP
✅ **Session management** with automatic token refresh
✅ **Row-level security** protecting user data
✅ **Real user accounts** instead of demo mode

## Next Steps (Optional)

- **Social Login**: Add Google, GitHub, Discord authentication
- **Email Templates**: Customize verification and reset emails
- **User Roles**: Add admin/moderator roles
- **Real Payments**: Integrate Stripe for actual purchases
- **Real Raffles**: Build raffle system with real entries
- **File Uploads**: Allow users to upload profile pictures

## Troubleshooting

**"Missing Supabase environment variables"**
- Make sure your `.env` file is in the project root
- Restart your development server after adding environment variables

**"Invalid login credentials"**
- Check if email verification is required
- Verify the user exists in Supabase Auth dashboard

**"Row Level Security policy violation"**
- Make sure the database migration ran successfully
- Check that policies are created in Supabase dashboard

**Email not sending**
- Check spam folder
- Verify email settings in Supabase dashboard
- For production, configure custom SMTP (optional)