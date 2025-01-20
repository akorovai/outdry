import { FC } from 'react'
import { SVG } from '@/components'
import {
  HassleFreeContainer,
  HassleFreeContainerContent,
  HassleFreeHeader,
  HFHText,
} from '../CheckoutContainer.styled.ts'
import { colors } from '@/consts'

export const HassleFreeReturns: FC = () => {
  return (
    <HassleFreeContainer>
      <HassleFreeContainerContent>
        <HassleFreeHeader>
          <SVG.Delivery color={colors.BLACK} />
          <HFHText>Hassle-Free Returns</HFHText>
        </HassleFreeHeader>
        You can expect a 3-5 day return processing time if you're not satisfied with your item. It's that simple!
      </HassleFreeContainerContent>
    </HassleFreeContainer>
  )
}
