




<div class="row">
    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <div class="d-flex align-items-center"> <!-- Nuevo div para contener la imagen y el texto -->
                    <img width="48" height="48" src="https://img.icons8.com/color/48/engineer-skin-type-5.png" alt="engineer-skin-type-5"/>
                    <h5 class="card-title fw-semibold mb-4 ms-2">Lista de Equipo</h5>
                    </div>
                <div class="table-responsive">
                    <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_equipo">
                    <i class="ti ti-users"></i>
                        Nuevo Equipo
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                
                                <th  class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Nombres</h6>
                                    
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Apellidos</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Identificacion</h6>
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
                        <tbody id="tabla_equipo">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Ventana Modal-->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="Modal_equipo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_equipo">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Equipo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <input type="hidden" name="UserId" id="UserId">


                    <div class="form-group">
                        <label for="Identification">Cédula</label>
                        <input type="text" onfocusout="algoritmo_cedula();cedula_repetida();" required class="form-control" id="Identification" name="Identification" placeholder="Identification">
                        <div class="alert alert-danger d-none" role="alert" id="errorCedula">
                        </div>
                        <div class="alert alert-danger d-none" role="alert" id="CedulaRepetida">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="names">Nombres</label>
                        <input type="text" required class="form-control" id="names" name="names" placeholder="Nombres">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Apellidos</label>
                        <input type="text" required class="form-control" id="lastName" name="lastName" placeholder="Apellidos">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo</label>
                        <input type="text" required onfocusout="verifica_correo()" class="form-control" id="email" name="email" placeholder="Email">
                        <div class="alert alert-danger d-none" role="alert" id="CorreoRepetido">
                        </div>
                    <div class="form-group">
                        <label for="Area">Area</label>
                        <select name="Area" id="Area" class="form-control">
                            <option value="Ventas">Ventas</option>
                            <option value="Soporte">Soporte</option>
                            <option value="Administrativo">Administrativo</option>
                        </select>
                    </div>
    
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
