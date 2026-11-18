class Product{
    constructor(page){
        this.page=page
        this.productsText = page.locator('//span[text()="Products"]');
    }

    async verifyproduct(){
        await expect(this.productsText).toHaveText("Products");
    }
}