<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link
      href="{{asset('/bootstrap-5.2.3-dist/css/bootstrap.min.css')}}"
      rel="stylesheet"
    />
    <link
      href="{{asset('/css/styles.css')}}"
      rel="stylesheet"
    />
</head>
<body>
    
@yield('content')


<script>
    const getAllEmployeesUrl = "{{ route('getAllEmployees') }}";
</script>

<script src="{{asset('/jQuery/jquery.min.js')}}"></script>
<script src="{{asset('/js/apiFunctions.js')}}"></script>
<script src="{{asset('/bootstrap-5.2.3-dist/js/bootstrap.min.js')}}"></script>
</body>
</html>