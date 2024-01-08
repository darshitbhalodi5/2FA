import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Username.module.css';

export default function Information() {

  return (
    <div className="container mx-auto">

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.window}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Information Center</h4>
            <span className='py-4 text-xl w-2/3 text-center text-purple-800'>
              Want to know about some information related to project.
            </span>
          </div>

          <form className='py-10'>
              <div className="textbox flex flex-col items-center gap-2">
                  <Link className={styles.btn} to='/2fa'><button type='submit'>Two Factor Authentication</button></Link>
                  <Link className={styles.btn} to='/pla'><button type='submit'>Passwordless Authentication</button></Link>
                  <Link className={styles.btn} to='/psc'><button type='submit'>Password Strength Checker</button></Link>
              </div>
              <div className="text-center py-4">
                <span>Reading Complete & Want to Login? <Link className='text-green-800' to="/">Login Now</Link></span>
              </div>
          </form>

        </div>
      </div>
    </div>
  )
}
