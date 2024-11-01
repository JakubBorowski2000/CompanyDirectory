<div class="row">
    <div class="col-12 overflow-auto @if(isset($tableClass)) {{$tableClass}} @endif">
        <table
        id="employeeTable"
        class="display nowrap table table-striped table-dark text-white"
        style="width: 100%"
        >
        <thead>
            <tr>
                @if(isset($tableHeadNames))
                    @foreach($tableHeadNames as $name)
                        <th scope="col">{{$name}}</th>
                    @endforeach
                @endif
            </tr>
        </thead>
        <tbody></tbody>
        </table>
    </div>
</div>