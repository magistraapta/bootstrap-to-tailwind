const template = document.createElement("template");
template.innerHTML = /*html*/ `
  <nav class="navbar navbar-expand-xl navbar-light navbar-nd" id="navbar-desktop">
        <div class="container-fluid">
          <!-- {{-- Logo --}} -->
          <a class="navbar-brand" href="">
            <img src="images/logo_bwa_new.svg" width="50" height="50" class="d-inline-block align-top" alt="logo buildwithangga" />
          </a>
          <!-- {{-- MOBILE Toggler Button --}} -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- {{-- Menus --}} -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- {{-- LEFT Menu --}} -->
            <ul class="basic-menus navbar-nav me-auto mb-2 mb-lg-0">
              <!-- @if (\App\Models\Kelas::where('is_promo', 1)->count() > 1) -->
              <li class="nav-item">
                <a class="nav-link" href="sale.html"> Flash Sale </a>
              </li>
              <!-- @endif -->

              <!-- {{-- Kelas --}} -->
              <li class="nav-item d-flex flex-column justify-content-start align-items-start dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="listKelasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Kelas </a>
                <ul class="dropdown-menu __2022" aria-labelledby="listKelasDropdown">
                  <li class="sidecontent">
                    <p>Trusted by 900K+ Students</p>
                    <h5>
                      Build Your <br />
                      Future Career
                    </h5>
                    <p>
                      Explore kelas gratis dan berbayar <br />
                      bersama mentor expert
                    </p>
                    <a href="" class="btn btn-primary">All Courses</a>
                    <img src="images/silhouette-project-bwa.png" alt="icon buildwith angga" />
                  </li>
                  <li class="dropdown-item">
                    <div class="row row-cols-lg-3 row-cols-2 dd-item-list">
                      <div class="col">
                        <a href="uiux-design">
                          <p>UI/UX Design</p>
                        </a>
                        <a href="graphic-design">
                          <p>Graphic Design</p>
                        </a>
                        <a href="web-development">
                          <p>Web Development</p>
                        </a>
                        <a href="data-analysis">
                          <p>Data Analysis</p>
                        </a>
                        <a href="android-development">
                          <p>Android Development</p>
                        </a>
                        <a href="ios-development">
                          <p>iOS Development</p>
                        </a>
                      </div>
                      <div class="col">
                        <a href="html-css">
                          <p>HTML & CSS</p>
                        </a>
                        <a href="javascript">
                          <p>JavaScript</p>
                        </a>
                        <a href="php">
                          <p>PHP</p>
                        </a>
                        <a href="python">
                          <p>Python</p>
                        </a>
                        <a href="kotlin">
                          <p>Kotlin</p>
                        </a>
                        <a href="java">
                          <p>Java</p>
                        </a>
                      </div>
                      <div class="col">
                        <a href="figma">
                          <p>Figma</p>
                        </a>
                        <a href="laravel">
                          <p>Laravel</p>
                        </a>
                        <a href="flutter">
                          <p>Flutter</p>
                        </a>
                        <a href="react-native">
                          <p>React Native</p>
                        </a>
                        <a href="vue-js">
                          <p>Vue JS</p>
                        </a>
                        <a href="react-js">
                          <p>React JS</p>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- {{-- Alur Belajar --}} -->
              <li class="nav-item d-flex flex-column justify-content-start align-items-start dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="listAlurBelajarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Alur Belajar </a>
                <ul class="dropdown-menu __2022" aria-labelledby="listAlurBelajarDropdown">
                  <li class="sidecontent">
                    <p>Trusted by 900K+ Students</p>
                    <h5>
                      Follow Our <br />
                      Best Roadmap
                    </h5>
                    <p>
                      Panduan mentor expert untuk <br />
                      belajar jadi lebih terarah
                    </p>
                    <a href="" class="btn btn-primary">All Roadmap</a>
                    <img src="images/silhouette-roadmap-bwa.png" alt="roadmap" />
                  </li>
                  <div class="dd-item-list">
                    <!-- {{-- Full-Stack Website Developer --}} -->
                    <li class="dropdown-item">
                      <a href="">
                        <img src="images/ic_appcode.svg" class="icon" alt="bwa-icon" />
                      </a>
                      <a href="">
                        <h3 class="title">Full-Stack Website Developer</h3>
                        <p class="subtitle">Rekomendasi oleh mentor expert</p>
                      </a>
                    </li>
                    <!-- {{-- UI/UX Designer --}} -->
                    <li class="dropdown-item">
                      <a href="">
                        <img src="images/ic_design.svg" class="icon" alt="bwa-icon" />
                      </a>
                      <a href="">
                        <h3 class="title">UI/UX Designer</h3>
                        <p class="subtitle">Rekomendasi oleh mentor expert</p>
                      </a>
                    </li>
                    <!-- {{-- Mobile App Developer --}} -->
                    <li class="dropdown-item">
                      <a href="">
                        <img src="images/ic_flutter.svg" class="icon" alt="bwa-icon" />
                      </a>
                      <a href="">
                        <h3 class="title">Mobile App Developer</h3>
                        <p class="subtitle">Rekomendasi oleh mentor expert</p>
                      </a>
                    </li>
                    <!-- {{-- Product Manager --}} -->
                    <li class="dropdown-item">
                      <a href="">
                        <img src="images/ic_flag.svg" class="icon" alt="bwa-icon" />
                      </a>
                      <a href="">
                        <h3 class="title">Product Manager</h3>
                        <p class="subtitle">Rekomendasi oleh mentor expert</p>
                      </a>
                    </li>
                  </div>
                </ul>
              </li>

              <!-- {{-- Bootcamp --}} -->
              <li class="nav-item">
                <a class="nav-link" href=""> Bootcamp </a>
              </li>
            </ul>

            <!-- {{-- RIGHT Menu --}} -->
            <ul class="navbar-nav right-menu ms-auto">
              <li class="nav-item d-flex align-items-center">
                <span data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="CTRL+P" data-bs-custom-class="font-poppins">
                  <button type="button" class="btn-secondary" data-bs-toggle="modal" data-bs-target="#quickSearchModal">
                    <img class="search" src="images/ic_search.svg" alt="search buildwith angga" />
                  </button>
                </span>
              </li>

              <!-- @if (Auth::check()) -->
              <!-- New Notification Icon -->
              <!-- <div id="app">
                <li class="nav-item d-flex align-items-center">
                  <button type="button" class="nav-icon position-relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.0186 2.91016C8.70862 2.91016 6.01862 5.60016 6.01862 8.91016V11.8002C6.01862 12.4102 5.75862 13.3402 5.44862 13.8602L4.29862 15.7702C3.58862 16.9502 4.07862 18.2602 5.37862 18.7002C9.68862 20.1402 14.3386 20.1402 18.6486 18.7002C19.8586 18.3002 20.3886 16.8702 19.7286 15.7702L18.5786 13.8602C18.2786 13.3402 18.0186 12.4102 18.0186 11.8002V8.91016C18.0186 5.61016 15.3186 2.91016 12.0186 2.91016Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.8719 3.19945C12.6626 2.85504 11.3812 2.85504 10.1719 3.19945C10.4619 2.45945 11.1819 1.93945 12.0219 1.93945C12.8619 1.93945 13.5819 2.45945 13.8719 3.19945V3.19945Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.0195 19.0605C15.0195 20.7105 13.6695 22.0605 12.0195 22.0605C11.1995 22.0605 10.4395 21.7205 9.89953 21.1805C9.33769 20.6179 9.02132 19.8557 9.01953 19.0605"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                    </svg>

                    <img class="position-absolute" src="images/ic_red_ellipse.svg" alt="ellipse" style="top: 13px; right: 13px" />
                  </button>
                </li>
              </div> -->

              <!-- {{-- User Avatar --}} -->
              <!-- {{-- <li class="nav-item d-none d-sm-block d-lg-flex dropdown"> --}} -->
              <!-- <li class="nav-item d-none d-sm-flex flex-column justify-content-start align-items-start dropdown">
                <a href="#" class="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="user-name">
                    Halo, UserName -->
              <!-- @if (Auth::user()->hasRole('author'))
                                      <span class="badge-blue" style="margin-left:6px;padding: 5px 10px;font-weight: 700;font-size: 12px;line-height: 18px;">Mentor</span>
                                  @endif -->
              <!-- </span>
                  <img class="user-photo" src="images/default-avatar.svg" alt="username" />
                </a>
                <ul class="mt-2 dropdown-menu dropdown-nd" aria-labelledby="dropdownMenuLink" style="left: auto; right: 0"> -->
              <!-- @if (Auth::user()->hasRole('author'))
                                  <li>
                                      <a class="dropdown-item"
                                          href="">
                                          Dashboard Mentor
                                      </a>
                                  </li>
                                  <li><a class="dropdown-item" href="">Settings</a></li>
                                  <li><a class="dropdown-item" href="">Logout</a></li>
                              @else -->
              <!-- <li><a class="dropdown-item" href="">My Courses</a></li>
                  <li><a class="dropdown-item" href=""> My Certificates </a></li>
                  <li><a class="dropdown-item" href="">Progress Belajar</a></li>
                  <li><a class="dropdown-item" href="">Settings</a></li>
                  <li><a class="dropdown-item" href="">Logout</a></li> -->
              <!-- @endif -->
              <!-- </ul>
              </li> -->
              <!-- @else -->
              <li class="nav-item wrap-btn-daftar">
                <a class="btn btn-secondary btn-auth btn-daftar d-xl-none" href="">Masuk</a>
                <button class="btn btn-secondary btn-auth btn-daftar btn-auth d-none d-xl-flex justify-content-center align-items-center" style="width: 160px !important">Masuk/Daftar</button>
              </li>
              <!-- @if (!Route::currentRouteNamed('welcome'))
                          <li class="nav-item">
                              <a class="btn btn-primary btn-masuk btn-auth {{ Route::currentRouteName() == 'front.start.index' ? 'd-none' : '' }}"
                                  href="">Daftar</a>
                          </li>
                      @endif -->
              <!-- @endif -->
            </ul>
          </div>
        </div>
      </nav>
  `;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    // this.count = 0;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.getElementById("inc").onclick = () => this.inc();
    // this.shadowRoot.getElementById("dec").onclick = () => this.dec();
    // this.update(this.count);
  }

  //   inc() {
  //     this.update(++this.count);
  //   }

  //   dec() {
  //     this.update(--this.count);
  //   }

  //   update(count) {
  //     this.shadowRoot.getElementById("count").innerHTML = count;
  //   }
}

customElements.define("my-counter", MyCounter);
