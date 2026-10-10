import BazarProductList from '@/app/components/AllProductList'
import type { BazarProduct } from '@/app/Type'

const API_URL = 'https://api.abcz.workers.dev/api/bazardor/products'
export const instant = false
const AllProductsSection = async () => {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const data = await response.json()

    const products: BazarProduct[] = Array.isArray(data)
      ? data
      : data.products ?? []

    return (
      <section className='py-8'>
        <BazarProductList products={products} />
      </section>
    )
  } catch (error) {
    console.error('Error fetching products:', error)

    return (
      <section className='py-8'>
        <p className='text-center text-red-600'>
          পণ্যের তালিকা লোড করা যায়নি। আবার চেষ্টা করুন।
        </p>
      </section>
    )
  }
}

export default AllProductsSection
