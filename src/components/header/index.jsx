import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../../components/button'
import { Flexbox } from './styles'

export default function Header() {
      return(
            <Flexbox>
                  <div>
                        <h1 style={{ fontSize: 35 }}>THEMOVIEBOX</h1>
                  </div>
                  <div className="nav-desktop">
                        <FaSearch />
                        <Button>LOG IN</Button>
                        <Button colored>SIGN UP</Button>
                  </div>
                  <div className="nav-mobile">
                        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                        <label for="openSidebarMenu" class="sidebarIconToggle">
                              <div class="spinner diagonal part-1"></div>
                              <div class="spinner horizontal"></div>
                              <div class="spinner diagonal part-2"></div>
                        </label>
                        <div id="sidebarMenu">
                              <div class="sidebarMenuMain">
                                    <ul class="sidebarMenuInner">
                                    <li><a href="https://vanila.io" target="_blank">Home</a></li>
                                    <li><a href="https://vanila.io" target="_blank">About</a></li>
                                    <li><a href="https://instagram.com/plavookac" target="_blank">Rating</a></li>
                                    <li><a href="https://twitter.com/plavookac" target="_blank">Contact</a></li>
                                    <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Login</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </Flexbox>
      )
}