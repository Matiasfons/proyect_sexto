<div class="container-fluid">
    <div class="row">
        <div class="">
            <div class="card w-100">
                <div class="card-body p-4">
                    <div class="d-flex align-items-center"> <!-- Nuevo div para contener la imagen y el texto -->
                        <box-icon name='report' color='#000000' type='solid'></box-icon>
                        <h5 class="card-title fw-semibold mb-4 ms-2">Lista de Reportes</h5>
                    </div>
                    <div class="table-responsive">


                        <table class="table text-nowrap mb-0 align-middle">
                            <thead class="text-dark fs-4">
                                <tr>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">#</h6>
                                    </th>

                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Nombres</h6>

                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Apellidos</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Identificacion</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Dirección</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Teléfono</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Correo</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Area</h6>
                                    </th>
                                    <th class="border-bottom-0">
                                        <h6 class="fw-semibold mb-0">Opciones</h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="tabla_reports">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Ventana Modal-->

    <!-- Button trigger modal -->



    <!-- Modal de actualizar-->

    <div class="modal fade" id="Modal_equipoUpdate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form method="post" id="form_equipo">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Información</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <input type="hidden" name="id" id="id">

                        <div class="form-group">
                            <label for="names">Nombres</label>
                            <input disabled type="text" required class="form-control" id="namesU" name="names" placeholder="Nombres">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Apellidos</label>
                            <input disabled type="text" required class="form-control" id="lastNameU" name="lastName" placeholder="Apellidos">
                        </div>
                        <div class="form-group">
                            <label for="Identification">Identification</label>
                            <input disabled type="text" required class="form-control" id="identificationU" name="identification" placeholder="Identification">
                        </div>
                        <div class="form-group">
                            <label for="Identification">Dirección</label>
                            <input disabled type="text" required class="form-control" id="direccionU" name="identification" placeholder="Identification">
                        </div>
                        <div class="form-group">
                            <label for="Identification">Teléfono</label>
                            <input disabled type="text" required class="form-control" id="telefonoU" name="identification" placeholder="Identification">
                        </div>
                        <div class="form-group">
                            <label for="email">Correo</label>
                            <input disabled type="text" required class="form-control" id="emailU" name="email" placeholder="Email">
                            <div class="alert alert-danger d-none" role="alert" id="CorreoRepetido">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea disabled type="text" required class="form-control" id="mensajeU" name="mensaje" placeholder="mensaje"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="respuesta">Respuesta</label>
                            <textarea disabled type="text" required class="form-control" id="respuestaU" name="respuesta" placeholder="respuesta"></textarea>
                        </div>
                        <div hidden id="idUpdate"></div>

                        <div class="form-group">
                            <label for="Area">Area</label>
                            <select disabled name="Area" id="areaU" class="form-control">
                                <option value="Ventas">Ventas</option>
                                <option value="Soporte">Soporte</option>
                                <option value="Administrativo">Administrativo</option>
                            </select>
                        </div>


                    </div>
                    <div class="modal-footer">
                         <button type="submit"  id="act" class="btn btn-primary" onclick="update(event)"> >Actualizar</button>

                        <button type="button" id="btn_cerrarU" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <?php require_once('../html/script2.php') ?>
    <script src="reports.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />


</div>