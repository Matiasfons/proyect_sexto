<div class="container">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Reporta tu Error</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
    </div>
    <!-- Contact Section Form-->
    <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-7">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <!-- CI input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="identification" type="text" placeholder="Ingresa tu Identificación" data-sb-validations="required" />
                    <label for="cedula">Identificación</label>
                    <div class="invalid-feedback" data-sb-feedback="cedula:required">Identificación requerido.</div>
                </div>
                <!-- Name input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="names" type="text" placeholder="Ingresa tu Nombre" data-sb-validations="required" />
                    <label for="nombre">Nombres</label>
                    <div class="invalid-feedback" data-sb-feedback="nombre:required">Nombre requerido.</div>
                </div>
                <!-- Surname input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="lastName" type="text" placeholder="Ingresa tu Apellido" data-sb-validations="required" />
                    <label for="apellido">Apellidos</label>
                    <div class="invalid-feedback" data-sb-feedback="apellido:required">Apellido requerido.</div>
                </div>
                <!-- address input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="address" type="text" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label for="direccion">Direccion</label>
                    <div class="invalid-feedback" data-sb-feedback="direccion:required">Direccion requerida.</div>
                    <div class="invalid-feedback" data-sb-feedback="direccion:requiered">Direccion invalida.</div>
                </div>
                <!-- Phone number input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="phone" type="telefono" placeholder="Ingrese su telefono" data-sb-validations="required" />
                    <label for="telefono">Telefono</label>
                    <div class="invalid-feedback" data-sb-feedback="telefono:required">El telefono es requirido</div>
                </div>
                <!-- Email address input-->
                <div class="form-floating mb-3">
                    <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label for="email">Correo</label>
                    <div class="invalid-feedback" data-sb-feedback="email:required">Correo requerido.</div>
                    <div class="invalid-feedback" data-sb-feedback="email:email">Correo invalido.</div>
                </div>

                <div class="form-group">
                    <label for="Area">Área</label>
                    <!-- Message input-->
                    <div class="form-floating mb-3">
                        <select name="Area" id="area" class="form-control">
                            <option value="Ventas">Ventas</option>
                            <option value="Soporte">Soporte</option>
                            <option value="Administrativo">Administrativo</option>
                        </select>
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <textarea class="form-control" id="message" type="text" placeholder="Ingrese su reporte" style="height: 10rem" data-sb-validations="required"></textarea>
                    <label for="mensaje">Mensaje</label>
                    <div class="invalid-feedback" data-sb-feedback="mensaje:required">Mensaje es requerido.</div>
                </div>
                <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted-->
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">
                        <div class="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form-->
                <div class="d-none" id="submitErrorMessage">
                    <div class="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <!-- Submit Button-->
                <button class="btn btn-primary btn-xl"  onclick="postContact(event)">Enviar</button>
            </form>
        </div>
    </div>
    <script src="./js/contact.js"></script>
