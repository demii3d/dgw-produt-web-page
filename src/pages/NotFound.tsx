import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="navy-surface text-white flex min-h-[70vh] items-center pt-[72px]">
      <Seo path="/" noindex />
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">Page not found.</h1>
        <p className="mt-4 text-white/70">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-cyan mt-8">Back to home</Link>
      </div>
    </section>
  )
}
