import { Fragment, FC } from 'react'
import { SVG } from '../index.ts'
import { BreadcrumbContainer, BreadcrumbText } from './Breadcrumb.styled.ts'
import { colors } from '../../consts'

interface BreadcrumbProps {
  items?: string[]
  activeIndex?: number
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items = [], activeIndex = items.length - 1 }) => {
  if (items.length === 0) {
    return null
  }

  return (
    <BreadcrumbContainer initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      {items.map((item, index) => (
        <Fragment key={index}>
          <BreadcrumbText
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              color: index <= activeIndex ? colors.BLACK : colors.LIGHT_GREY_400,
              fontWeight: index <= activeIndex ? '600' : '400',
            }}
          >
            {item}
          </BreadcrumbText>
          {index < items.length - 1 && (
            <SVG.Arrow color={index <= activeIndex ? colors.BLACK : colors.LIGHT_GREY_400} />
          )}
        </Fragment>
      ))}
    </BreadcrumbContainer>
  )
}

export default Breadcrumb
