import { render, screen } from '@testing-library/react'
import { Hero } from '../../components/Hero'

describe('Hero Component', () => {
  it('renders hero section with personal information', () => {
    render(<Hero />)
    
    // Check if the hero section is rendered
    expect(screen.getByRole('banner')).toBeInTheDocument()
    
    // Check if personal info is displayed
    expect(screen.getByText(/Alex Johnson/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument()
  })

  it('displays call-to-action buttons', () => {
    render(<Hero />)
    
    // Check if CTA buttons are present
    expect(screen.getByText(/View Portfolio/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Hero />)
    
    // Check if the hero section has proper semantic structure
    const heroSection = screen.getByRole('banner')
    expect(heroSection).toHaveAttribute('id', 'hero')
  })
}) 