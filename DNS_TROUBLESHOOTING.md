# DNS Troubleshooting Guide for Netlify

## Step 1: Verify DNS Records

Check if your DNS records are correctly configured:

### Required DNS Records for Netlify:
```
Type: A
Name: @ (or your domain)
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: your-site-name.netlify.app
```

### Check DNS Propagation:
1. Go to https://dnschecker.org
2. Enter your domain name
3. Check if A record shows `75.2.60.5`
4. Check if CNAME shows your Netlify subdomain

## Step 2: Common Issues & Fixes

### Issue 1: Wrong DNS Records
**Problem**: Using old or incorrect IP addresses
**Solution**: Update to Netlify's current IP: `75.2.60.5`

### Issue 2: TTL Too High
**Problem**: DNS TTL (Time To Live) set too high
**Solution**: Lower TTL to 300-600 seconds, wait for propagation

### Issue 3: Cloudflare Proxy
**Problem**: Orange cloud enabled in Cloudflare
**Solution**: Click orange cloud to make it gray (DNS only)

### Issue 4: Registrar DNS vs External DNS
**Problem**: Mixed DNS management between registrar and external provider
**Solution**: Use either registrar DNS OR external DNS, not both

## Step 3: Netlify-Specific Checks

### In Netlify Dashboard:
1. Go to Site Settings → Domain Management
2. Check if domain shows "Awaiting external DNS"
3. Verify the domain is spelled correctly
4. Check if SSL certificate is provisioning

### Force DNS Check:
1. In Netlify, go to Domain Settings
2. Click "Options" → "Go to DNS panel"
3. Click "Verify DNS configuration"

## Step 4: Provider-Specific Instructions

### GoDaddy:
1. Go to DNS Management
2. Delete existing A records
3. Add new A record: @ → 75.2.60.5
4. Add CNAME: www → your-site.netlify.app

### Namecheap:
1. Go to Advanced DNS
2. Delete existing records
3. Add A record: @ → 75.2.60.5
4. Add CNAME: www → your-site.netlify.app

### Cloudflare:
1. Go to DNS settings
2. Ensure orange cloud is OFF (gray)
3. A record: @ → 75.2.60.5
4. CNAME: www → your-site.netlify.app

### Google Domains:
1. Go to DNS settings
2. Add A record: @ → 75.2.60.5
3. Add CNAME: www → your-site.netlify.app

## Step 5: Advanced Troubleshooting

### Check from Command Line:
```bash
# Check A record
dig yourdomain.com A

# Check CNAME
dig www.yourdomain.com CNAME

# Check from different DNS servers
dig @8.8.8.8 yourdomain.com A
dig @1.1.1.1 yourdomain.com A
```

### Expected Results:
```
yourdomain.com. 300 IN A 75.2.60.5
www.yourdomain.com. 300 IN CNAME your-site.netlify.app
```

## Step 6: Contact Support

If still not working after 48 hours:

### Netlify Support:
- Email: support@netlify.com
- Include: Domain name, DNS provider, screenshots of DNS settings

### DNS Provider Support:
- Contact your domain registrar
- Ask them to verify DNS propagation
- Request manual DNS flush if needed

## Quick Fixes to Try:

1. **Remove and Re-add Domain**:
   - In Netlify, remove the custom domain
   - Wait 10 minutes
   - Add it back

2. **Clear DNS Cache**:
   - Flush your local DNS: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
   - Try accessing from different network/device

3. **Check for Typos**:
   - Verify domain spelling in Netlify
   - Check for extra spaces or characters

4. **Temporary Workaround**:
   - Use your-site.netlify.app temporarily
   - Set up domain later when DNS resolves

## Timeline Expectations:

- **Immediate**: Changes visible in DNS provider dashboard
- **5-30 minutes**: Changes propagate to major DNS servers
- **2-24 hours**: Global propagation complete
- **48+ hours**: Contact support if still not working

## Prevention for Future:

1. Always use low TTL (300-600 seconds) when making DNS changes
2. Make changes during low-traffic periods
3. Test DNS changes before updating Netlify
4. Keep DNS management in one place (don't split between providers)