import React, { useState } from 'react'
import styled from 'styled-components'
import { SVG } from '@/components'
import { colors, fonts } from '@/consts'

interface ReviewFormOverlayProps {
  onClose: () => void
  onSubmit: (reviewData: { rating: number; subject: string; comment: string }) => void
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const OverlayContent = styled.div`
  background: ${colors.WHITE};
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  color: ${colors.BLACK};
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${colors.LIGHT_GREY_200};
  border-radius: 0.5rem;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${colors.LIGHT_GREY_200};
  border-radius: 0.5rem;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`

const SubmitButton = styled.button`
  background: ${colors.DARK_GREEN_2};
  color: ${colors.WHITE};
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${colors.DARK_GREEN};
  }
`

export const ReviewFormOverlay: React.FC<ReviewFormOverlayProps> = ({ onClose, onSubmit }) => {
  const [rating, setRating] = useState(0)
  const [subject, setSubject] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ rating, subject, comment })
  }

  return (
    <Overlay>
      <OverlayContent>
        <CloseButton onClick={onClose}>
          <SVG.Cross color={colors.BLACK} />
        </CloseButton>
        <h2>Write a Review</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Rating</Label>
            <Input
              type='number'
              min='1'
              max='5'
              value={rating}
              onChange={e => setRating(Number(e.target.value))}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Subject</Label>
            <Input type='text' value={subject} onChange={e => setSubject(e.target.value)} required />
          </FormGroup>
          <FormGroup>
            <Label>Comment</Label>
            <TextArea value={comment} onChange={e => setComment(e.target.value)} required />
          </FormGroup>
          <SubmitButton type='submit'>Submit Review</SubmitButton>
        </Form>
      </OverlayContent>
    </Overlay>
  )
}
