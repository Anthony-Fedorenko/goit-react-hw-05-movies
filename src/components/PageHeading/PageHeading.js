import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PageHeading.module.css'


function PageHeading({ onSubmit }) {
    const [query, setQuery] = useState('')

    const handleChange = e => {
        setQuery(e.currentTarget.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (query.length !== 0) {
            onSubmit(query)
            setQuery('')
        }
    }

    return (
        <div >
            <form  onSubmit={handleSubmit}>
                <input

                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Film search"
                    onChange={handleChange}
                    value={query}
                    className={styles.input}
                />
                <button className={styles.button} type="submit" >
                    Search
                </button>
            </form>
        </div>
    )
}

PageHeading.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
export default PageHeading