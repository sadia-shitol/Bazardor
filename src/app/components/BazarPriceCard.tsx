import type { BazarProduct } from '@/app/Type'
import Link from 'next/link'

type Props = {
  product: BazarProduct
}

const unitLabels: Record<string, string> = {
  kg: 'কেজি',
  piece: 'পিস',
  dozen: 'ডজন',
  litre: 'লিটার',
}

export default function BazarPriceCard({ product }: Props) {
  const isUp = product.change.dir === 'up'

  const unitLabel = unitLabels[product.unit] ?? product.unit

  return (
    <Link href={`/products/${product.id}`}>
      <article className='card rounded-xl border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-md'>
        <div className='card-body bg-[#fafcfa] gap-3 p-3 sm:p-4'>
          {/* Product info + category icon */}
          <div className=' flex items-start justify-between gap-2'>
            <div className='flex min-w-0 items-center gap-2'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-base-200/70 text-xl'>
                {product.image}
              </div>

              <div className='min-w-0'>
                <h3 className='truncate text-xl font-semibold text-base-content'>
                  {product.nameBn}
                </h3>

                <p className='text-large text-base-content/60'>
                  প্রতি {unitLabel}
                </p>
              </div>
            </div>

            {/* Category icon: upper right */}
            <div
              className='flex text-sm size-8 shrink-0 items-center justify-center rounded-lg '
              title={product.categoryNameBn}
              aria-label={`বিভাগ: ${product.categoryNameBn}`}
            >
              {product.categoryIcon}
              {product.categoryNameBn}
            </div>
          </div>

          <div className='flex items-end justify-between gap-2'>
            <div>
              <p className='mb-1 text-sm text-base-content/60'>আজকের দাম</p>

              <p className='text-base font-bold leading-none text-base-content'>
                {product.today.toLocaleString('bn-BD')} টাকা
              </p>
            </div>

            <span
              className={`badge h-auto gap-1 border-0 px-2 py-1 text-large font-medium ${
                isUp ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-900'
              }`}
            >
              <span aria-hidden='true'>{isUp ? '▲' : '▼'}</span>
              {product.change.pct.toLocaleString('bn-BD', {
                maximumFractionDigits: 2,
              })}
              %
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
