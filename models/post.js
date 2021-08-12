export default function Post(title, author, url, metaDescription, metaKeywords, tag, resume, readTime, thumbnail, image, content, status='new') {
    this.title = title
    this.author = author
    this.url = url
    this.metaDescription = metaDescription
    this.metaKeywords = metaKeywords
    this.tag = tag
    this.resume = resume
    this.readTime = readTime
    this.thumbnail = thumbnail
    this.image = image
    this.content = content
    this.status = status
    this.createdAt = new Date().toISOString()
    return this
}