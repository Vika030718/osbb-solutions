$(function() {

    $(".menu__toggler").on("click", function(e) {
        $(".menu__main").toggleClass("menu_opened");
        console.log("dsfsd")
    });

    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

})();


  
