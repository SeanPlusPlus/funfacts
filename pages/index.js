import { useState, useContext } from "react"
import axios from "axios"
import { GlobalContext } from "../context/GlobalState"
import Header from "../components/header"
import isJsonString from "../utils/isJsonString"

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    json,
    setJson,
  } = useContext(GlobalContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsDisabled(true)
    setIsSubmitting(true)
    const r = await axios.post('/api/entry', json)
    const { data: { entry_id } } = r

    // clear input and loader
    setIsSubmitting(true)

    // redirect
    window.location.href = `/api/${entry_id}`
  }

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const isValid = isJsonString(value)
    if (isValid) {
      setIsDisabled(false)
      setJson(JSON.parse(value))
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <>
      <Header />
      <main className="flex">
        <div className="m-auto">
          <h1 className="text-4xl mb-3 mt-20">Fun Facts</h1>
          <p className="text-md mb-4 flex">
            <span className="mr-1">
              Team building game
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
            </span>
          </p>
          {isSubmitting ? (
            <div className="w-96">
              <div className="ml-10 loading"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <textarea
                className="textarea textarea-bordered w-96"
                placeholder="Your data goes here"
                spellCheck="false"
                onChange={handleChange}
              />
              <div className="mt-2">
                <button
                  className="btn btn-info pr-8 pl-8"
                  disabled={isDisabled}
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  )
}
