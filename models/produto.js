export default function Produto(pageTitle, url, metaDescription, metaKeywords, name, resume, price, thumbnail, image, link, description) {
    this.pageTitle = pageTitle
    this.url = url
    this.metaDescription = metaDescription
    this.metaKeywords = metaKeywords
    this.name = name
    this.resume = resume
    this.price = price
    this.thumbnail = thumbnail
    this.image = image 
    this.link = link
    this.description = description
    this.status = 'active'
    this.createdAt = new Date().toISOString()
    return this
}