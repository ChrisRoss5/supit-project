export default () => {
    $("form").submit(async (e) => {
        e.preventDefault();
        console.log(e.target.action);
        console.log($( "#form" ).serialize());
        return;
        const data = $.post(e.target.action, (data) => {
            console.log(data);
            $("#success").css("display", "block");
        });
    });
};
