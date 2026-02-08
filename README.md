# ☁️ Cloud Resume Challenge

A complete serverless portfolio website built on AWS, showcasing full-stack development and cloud engineering skills through the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

## 🌐 Live Demo

**Website:** [https://www.sileyesarr.com](#) <!-- Add your live URL here -->

## 📋 Project Overview

This project demonstrates:
- Full-stack serverless application on AWS
- Modern frontend with Next.js and TypeScript
- RESTful API backend with Lambda and DynamoDB
- Infrastructure as Code
- Automated CI/CD pipelines
- Real-time visitor counter
- Responsive design with dark/light theme

## 🏗️ Complete Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ↓
              ┌──────────────────────┐
              │   Route 53 (DNS)     │
              └──────────┬───────────┘
                         │
                         ↓
              ┌──────────────────────┐
              │  CloudFront (CDN)    │
              │  + SSL Certificate   │
              └──────────┬───────────┘
                         │
         ┌───────────────┴───────────────┐
         │                               │
         ↓                               ↓
┌─────────────────┐            ┌─────────────────┐
│   S3 Bucket     │            │  API Gateway    │
│  (Frontend)     │            │   (REST API)    │
│  Next.js App    │            └────────┬────────┘
└─────────────────┘                     │
                                        ↓
                              ┌─────────────────┐
                              │ Lambda Function │
                              │  (Visitor API)  │
                              └────────┬────────┘
                                       │
                                       ↓
                              ┌─────────────────┐
                              │    DynamoDB     │
                              │ (Visitor Count) │
                              └─────────────────┘
```

## 📂 Repository Structure

This project is split into separate repositories:

### 🎨 [Frontend Repository](https://github.com/Sileye00/sileye-resume-frontend)
- Next.js 14 + TypeScript
- Tailwind CSS styling
- Responsive design with dark/light theme
- Deployed to S3 + CloudFront

### ⚙️ [Backend Repository](https://github.com/Sileye00/sileye-resume-backend)
- Lambda functions
- API Gateway REST API
- DynamoDB for data storage
- Serverless architecture

## 🛠️ Technologies Used

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons

### Backend
- AWS Lambda
- API Gateway
- DynamoDB
- Python/Node.js

### Infrastructure & DevOps
- AWS S3
- CloudFront
- Route 53
- Certificate Manager
- GitHub Actions

## ✨ Key Features

- **Serverless Architecture:** No servers to manage, scales automatically
- **CI/CD Pipelines:** Automated testing and deployment
- **Infrastructure as Code:** Reproducible infrastructure
- **Cost Efficient:** Runs on AWS free tier (~$0-2/month)
- **Secure:** HTTPS, IAM roles, least privilege access
- **Performant:** Global CDN, optimized assets

## 🚀 Deployment

Each repository has its own automated deployment pipeline:

**Frontend:**
```
git push → GitHub Actions → Build → Deploy to S3 → Invalidate CloudFront
```

**Backend:**
```
git push → GitHub Actions → Test → Package → Deploy Lambda → Update API
```

## 🌐 AWS Services Used

- **S3:** Static website hosting
- **CloudFront:** CDN for global distribution
- **Route 53:** DNS management
- **Certificate Manager:** SSL/TLS certificates
- **API Gateway:** RESTful API endpoints
- **Lambda:** Serverless functions
- **DynamoDB:** Visitor count storage

## 📊 Metrics

- **Build Time:** ~2-3 minutes
- **Deploy Time:** ~1-2 minutes
- **Page Load:** <2 seconds globally
- **API Response:** <100ms
- **Monthly Cost:** $0-2 (within free tier)

## 📝 Cloud Resume Challenge Checklist

- [x] 1. Certification (AWS/Azure/GCP)
- [x] 2. HTML resume
- [x] 3. CSS styling
- [x] 4. Static website (S3)
- [x] 5. HTTPS (CloudFront)
- [x] 6. DNS (Route 53)
- [x] 7. JavaScript visitor counter
- [x] 8. Database (DynamoDB)
- [x] 9. API (API Gateway + Lambda)
- [x] 10. Python/JavaScript backend
- [x] 11. Tests
- [x] 12. Infrastructure as Code
- [x] 13. Source control (GitHub)
- [x] 14. CI/CD (Backend)
- [x] 15. CI/CD (Frontend)
- [x] 16. Blog post

## 💡 What I Learned

- Serverless architecture patterns
- AWS service integration (S3, CloudFront, Lambda, API Gateway, DynamoDB)
- Infrastructure as Code best practices
- CI/CD pipeline design and implementation
- RESTful API design
- Frontend optimization and performance
- Cost optimization strategies
- Security best practices (IAM, CORS, HTTPS)

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sileye**

- GitHub: [@Sileye00](https://github.com/Sileye00)
- LinkedIn: [@Sileye Sarr](https://www.linkedin.com/in/sileyesarr) <!-- Add your LinkedIn URL -->
- Website: [https://www.sileyesarr.com](#)

## 🔗 Additional Resources

- **Blog Post:** [Read about my experience](#) <!-- Add your blog post URL -->
- **Backend Repository:** [View backend code](https://github.com/Sileye00/sileye-resume-backend)
- **Live Website:** [sileyesarr.com](#)

## 🙏 Acknowledgments

- [Forrest Brazeal](https://forrestbrazeal.com/) for creating the Cloud Resume Challenge
- Next.js team for the amazing framework
- AWS for comprehensive documentation and services
- The cloud community for inspiration and support

---

⭐ If you found this project helpful, please consider giving it a star!

💼 **Hiring?** I'm open to opportunities! Feel free to reach out.
