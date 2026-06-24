function StatsCard({

  title,

  value,

  color,

}) {

  return (

    <div className={`${color} text-white rounded-2xl p-6 shadow-lg`}>

      <p className="text-lg">

        {title}

      </p>

      <h1 className="text-4xl font-bold mt-3">

        {value}

      </h1>

    </div>

  );

}

export default StatsCard;