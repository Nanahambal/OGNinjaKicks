# DNS Troubleshooting for ogninjakicks.com

## Step 1: Check Current DNS Status

First, let's verify what's actually happening with your domain:

### Check DNS Propagation:
1. Go to https://dnschecker.org
2. Enter `ogninjakicks.com`
3. Check if the A record shows Netlify's IP: `75.2.60.5`

### Check from Command Line (if available):
```bash
# Check A record
nslookup ogninjakicks.com

# Expected result should show: 75.2.60.5
```

## Step 2: Verify Your DNS Records in GoDaddy

### Required DNS Records:
```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
TTL: 600 (or 10 minutes)

Type: CNAME
Name: www
Value: your-netlify-site.netlify.app
TTL: 600
```

### Steps to Check/Fix in GoDaddy:
1. Log into GoDaddy
2. Go to "My Products" → "DNS"
3. Click "Manage" next to your domain
4. Look for these records:
   - **A Record**: `@` pointing to `75.2.60.5`
   - **CNAME Record**: `www` pointing to your Netlify site

## Step 3: Common Issues & Solutions

### Issue 1: Wrong IP Address
**Problem**: A record pointing to old/wrong IP
**Solution**: Update A record to `75.2.60.5`

### Issue 2: DNS Not Propagated Yet
**Problem**: Changes take time to propagate
**Timeline**: 
- 5-30 minutes: Most locations
- Up to 48 hours: Global propagation
**Solution**: Wait and check periodically

### Issue 3: Conflicting Records
**Problem**: Multiple A records or conflicting settings
**Solution**: Delete old records, keep only the correct ones

### Issue 4: TTL Too High
**Problem**: TTL set to 24 hours or more
**Solution**: Lower TTL to 600 seconds (10 minutes)

## Step 4: Netlify Configuration Check

### In Your Netlify Dashboard:
1. Go to Site Settings → Domain Management
2. Check if `ogninjakicks.com` is listed
3. Status should show "Netlify DNS" or "External DNS"
4. Look for any error messages

### If Domain Not Added to Netlify:
1. Click "Add custom domain"
2. Enter `ogninjakicks.com`
3. Follow the verification steps

## Step 5: Quick Tests

### Test Different URLs:
- `http://ogninjakicks.com` (should redirect to HTTPS)
- `https://ogninjakicks.com` (main site)
- `https://www.ogninjakicks.com` (should redirect to non-www)
- `your-site.netlify.app` (should work as backup)

### Test from Different Locations:
- Try from mobile data (different network)
- Ask someone else to test
- Use online tools like downforeveryoneorjustme.com

## Step 6: Immediate Actions You Can Take

### 1. Verify Netlify Site is Working:
Visit your `.netlify.app` URL to confirm the site itself works

### 2. Check DNS Records in GoDaddy:
- Remove any old A records
- Ensure A record points to `75.2.60.5`
- Ensure CNAME points to your Netlify subdomain

### 3. Lower TTL:
Change TTL to 600 seconds for faster propagation

### 4. Clear Your DNS Cache:
**Windows**: Open Command Prompt as admin, run `ipconfig /flushdns`
**Mac**: Run `sudo dscacheutil -flushcache`
**Router**: Restart your router/modem

## Step 7: What to Check Right Now

### In GoDaddy DNS Management:
Look for these exact records:

```
Type: A
Host: @
Points to: 75.2.60.5
TTL: 600

Type: CNAME  
Host: www
Points to: [your-netlify-site].netlify.app
TTL: 600
```

### Remove These if Present:
- Any A records pointing to other IPs
- Any CNAME records for @ (root domain)
- Any conflicting records

## Step 8: Expected Timeline

- **0-5 minutes**: Changes visible in GoDaddy
- **5-30 minutes**: Most DNS servers updated
- **2-24 hours**: Global propagation complete
- **24+ hours**: Contact support if still not working

## Step 9: Emergency Workaround

If you need the site working immediately:
1. Use your `.netlify.app` URL temporarily
2. Update any marketing materials to use the working URL
3. Fix DNS in parallel

## Step 10: When to Contact Support

Contact support if:
- DNS records are correct but site still not loading after 24 hours
- You see error messages in Netlify dashboard
- DNS checker shows mixed results globally

### Netlify Support:
- Email: support@netlify.com
- Include: Domain name, screenshots of DNS settings, error messages

### GoDaddy Support:
- Ask them to verify DNS propagation
- Request manual DNS flush if needed